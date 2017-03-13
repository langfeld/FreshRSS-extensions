<?php

class MobileScrollMenuExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js', false, true));
        Minz_View::appendScript($this->getFileUrl('script.js', 'js', true, false));   
    }

}
