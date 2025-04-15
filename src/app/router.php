<?php
    function router($method, $uri, $routes) 
    {
        $uri = urldecode($uri);
        $uri_segments = explode('/', trim($uri, '/'));

        if (isset($routes[$method])) 
        {
            foreach ($routes[$method] as $route => $handler) 
            {
                $route_segments = explode('/', trim($route, '/'));
                $params = [];

                if (count($uri_segments) === count($route_segments)) 
                {
                    $match = true;
                    for ($i = 0; $i < count($uri_segments); $i++) 
                    {
                        if ($route_segments[$i][0] === '{' && substr($route_segments[$i], -1) === '}') 
                        {
                            $params[] = $uri_segments[$i];
                        } 
                        elseif ($uri_segments[$i] !== $route_segments[$i]) 
                        {
                            $match = false;
                            break;
                        }
                    }

                    if ($match) 
                    {
                        call_user_func_array($handler, $params);
                        return;
                    }
                }
            }
        }

        notAllowed();
    }

    function articlesList() 
    {
        require_once("db.php");

        $stmt = $conn->prepare("SELECT nome, categoria, sottoCategoria FROM articoli NATURAL JOIN categorie NATURAL JOIN sottoCategorie");
        $stmt->execute();
        $result = $stmt->get_result();

        $data = array();

        while($row = $result->fetch_assoc()) 
        {
            $data[] = $row;
        }

        echo json_encode($data);
    }

    function articlesListCategory($categoria) 
    {
        require_once("db.php");

        $stmt = $conn->prepare("SELECT nome, categoria, sottoCategoria FROM articoli NATURAL JOIN categorie NATURAL JOIN sottoCategorie WHERE categoria = ?");
        $stmt->bind_param("s", $categoria);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = array();

        while($row = $result->fetch_assoc()) 
        {
            $data[] = $row;
        }

        echo json_encode($data);
    }

    function articlesListSubCategory($categoria, $sottoCategoria) 
    {
        require_once("db.php");

        $stmt = $conn->prepare("SELECT nome, categoria, sottoCategoria FROM articoli NATURAL JOIN categorie NATURAL JOIN sottoCategorie WHERE categoria = ? AND sottoCategoria = ?");
        $stmt->bind_param("ss", $categoria, $sottoCategoria);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = array();

        while($row = $result->fetch_assoc()) 
        {
            $data[] = $row;
        }

        echo json_encode($data);
    }

    function gestisci_articolo($categoria, $sottocategoria, $slug) 
    {
        echo "Articolo: " . $categoria . "/" . $sottocategoria . "/" . $slug;
    }

    function crea_articolo() 
    {
        echo "Creazione di un nuovo articolo";
    }

    function notAllowed() 
    {
        http_response_code(404);
        echo "Risorsa non trovata";
    }

    function gestisci_autenticazione() 
    {
        echo "Autenticazione";
    }