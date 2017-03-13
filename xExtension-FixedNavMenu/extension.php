<?php

class FixedNavMenuExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendStyle($this->getFileUrl('style.css', 'css'));
        
        echo "<script src='" . $this->getFileUrl('jquerymin.js', 'js') . "'></script>";
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'));        
    }

}
