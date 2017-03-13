<?php

class KeepFolderStateExtension extends Minz_Extension {

    public function init() {
        echo "<script src='" . $this->getFileUrl('jquerymin.js', 'js') . "'></script>";
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'));   
    }

}
