<?php
     session_start();
    require_once '../app/router.php';

    $routes = [
        'GET' => [
            '/api/lang' => 'lang',
            '/api/lang/{lingua}' => 'languagePage',
        ],
    ];

    $method = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['REQUEST_URI'];

    router($method, $uri, $routes);
?>