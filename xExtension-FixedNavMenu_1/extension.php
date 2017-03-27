<?php

class SmartMobileMenuExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendStyle($this->getFileUrl('style.css', 'css'));
        
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js'),'','','');
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'),'','','');       
    }

}
