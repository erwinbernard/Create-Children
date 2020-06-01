const DOM = {
  
  init: function () {
    this.familyTree.grandParent = 'ebhub_ajax'; // Element ID you wanted to attach children into
    return this.createChildren(this.familyTree);
  },
  
  createChildren: function ($elements) {
    var $appendGrand = true;
    for (var $child in $elements.children) {
      if (($appendGrand === true && $elements.children[$child].element) || ($elements.children[$child].parent && $elements.children[$child].element)) {
        var $elemCreated = document.createElement($elements.children[$child].element);
        for (var $attribute in $elements.children[$child]) {
          if ($attribute !== 'element' && $attribute !== 'parent' && $attribute !== 'inner') {
            // ====================
            // Only valid attributes are allowed here:
            // Object = $elements.children[$child]
            // Key = $attribute; Value = $elements.children[$child][$attribute]
            // ====================
            var $elemAttrib = document.createAttribute($attribute);
            $elemAttrib.value = $elements.children[$child][$attribute];
            $elemCreated.setAttributeNode($elemAttrib);
          }
        }
        if ($elements.children[$child].inner) {
          $elemCreated.innerHTML = $elements.children[$child].inner;
        }
        if ($appendGrand === true) {
          if ($elements.removeChild === true) {
            // Remove children if allowed
            let removeElement = document.getElementById($elements.grandParent);
            while (removeElement.firstChild) {
              removeElement.removeChild(removeElement.firstChild);
            }        
          }
          document.getElementById($elements.grandParent).appendChild($elemCreated);
          $appendGrand = false;
        } else {
          $elements.parentNode[$elements.children[$child].parent].appendChild($elemCreated);
        }
        $elements.parentNode[$child] = $elemCreated;
      } else {
        return null;
      }
    }
    return document.getElementById($elements.grandParent).innerHTML;
  },
  
  familyTree: {
    grandParent: 'erwin_bernard',
    removeChild: true,
    parentNode: [],

    children: {
      child01: {
        element:  'div',
        class:    'container',
        style:    'min-height: 600px;'
      },

      child02: {
        parent:   'child01',
        element:  'div',
        class:    'row col-sm-12'
      },

      child03: {
        parent:   'child02',
        element:  'div',
        class:    'feature-box left-icon v-tagline-box v-tagline-box-v2'
      },

      child04: {
        parent:   'child03',
        element:  'div',
        class:    'feature-box-icon small'
      },

      child05: {
        parent:   'child04',
        element:  'i',
        class:    'fa fa-times v-icon'
      },

      child06: {
        parent:   'child03',
        element:  'div',
        class:    'feature-box-text clearfix base-color'
      },

      child07: {
        parent:   'child06',
        element:  'h3',
        inner:    'This is a Heading'
      },

      child08: {
        parent:   'child06',
        element:  'div',
        class:    'feature-box-text-inner'
      },

      child09: {
        parent:   'child08',
        element:  'p',
        inner:    'This is my Message'
      },

      child10: {
        parent:   'child06',
        element:  'div'
      },

      child11: {
        parent:   'child10',
        element:  'p',
        inner:    'This is my 2nd Message'
      }
    }
  }
  
};
