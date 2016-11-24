import Ember from 'ember';

export function dragImage(imagePath) {
  return function(event) {
    let dragIcon = document.createElement('img');

    dragIcon.src = imagePath;
    event.dataTransfer.setDragImage(dragIcon, -10, -10);

    return event;
  };
}

export default Ember.Helper.helper(dragImage);
