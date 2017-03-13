<?php

class FixedNavMenuExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendStyle($this->getFileUrl('style.css', 'css'));
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js', false, true));
        Minz_View::appendScript($this->getFileUrl('script.js', 'js', true, false));        
    }

}
