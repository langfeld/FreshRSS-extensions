<?php

class MobileScrollMenuExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js', false, false));
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'));   
    }

}
