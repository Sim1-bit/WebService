<?php
    require_once '../app/router.php';

    $routes = [
        'GET' => [
            '/api/articoli' => 'articlesList',
            '/api/articoli/{categoria}' => 'articlesListCategory',
            '/api/articoli/{categoria}/{sottocategoria}' => 'articlesListSubCategory',
            '/api/articoli/{categoria}/{sottocategoria}/{slug}' => 'gestisci_articolo',
        ],
        'POST' => [
            '/api/auth' => 'gestisci_autenticazione',
            '/api/articoli' => 'crea_articolo',
        ],
    ];

    $method = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['REQUEST_URI'];

    router($method, $uri, $routes);
?>