<?php
    require_once '../app/router.php';

    $routes = [
        'GET' => [
            '/api/lang' => 'lang',
            '/api/lang/{lingua}' => 'language',
        ],
    ];

    $method = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['REQUEST_URI'];

    router($method, $uri, $routes);
?>