import Component from '@ember/component';
import { computed } from '@ember/object';
import _ from 'lodash';

export default Component.extend({
  init(){
    this._super(...arguments);
    this.selectedLabels = [];
  },
  filterText: '',
  labelNames: computed('labels', function(){
    return this.get('labels').map(function(label){
      return label.get('name');
    });
  }),
  isSearching: computed('filterText', 'selectedLabels.[]', function() {
    return this.get('filterText') !== "" || this.get('selectedLabels').length !== 0;
  }),
  filteredResults: computed('filterText', 'selectedLabels.[]', function() {
    let filter = this.get('filterText');
    let labels = this.get('selectedLabels');
    return this.get('tracks').filter(function(track) {
      if(labels.length != 0){
        if(_.intersection(track.get('labelNames'), labels).length == labels.length){
          return track.get('title').toLowerCase().indexOf(filter) !== -1;
        }else {
          return false;
        }
      }
      return track.get('title').toLowerCase().indexOf(filter) !== -1;
    });
  }),
  actions: {
    clearSearch() {
      this.set('filterText', '');
    },
    selectLabel(label) {
      this.get('selectedLabels').addObject(label.get('name'));
    }
  }
});
