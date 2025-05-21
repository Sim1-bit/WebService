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

    function lang() 
    {
        if(!isset($_SESSION["lang"]))
        {
            $lingua = "en";
            $_SESSION["lang"] = $lingua;
        }
        else
        {
            $lingua = $_SESSION["lang"];
        }

        $file = file_get_contents(__DIR__."/json/" . $lingua . ".json");
        $json = json_decode($file, true);

        header('Content-Type: application/json');
        echo json_encode($json);
    }
    
    function languagePage($lingua) 
    {
        if($lingua != "en" && $lingua != "it" && !isset($_SESSION["lang"]))
        {
            $lingua = "en";
        }
        elseif($lingua != "en" && $lingua != "it" && isset($_SESSION["lang"]))
        {
            $lingua = $_SESSION["lang"];
        }

        $file = file_get_contents(__DIR__."/json/" . $lingua . ".json");
        $json = json_decode($file, true);

        if(!isset($_SESSION["lang"]) || $_SESSION["lang"] != $lingua)
        {
            $_SESSION["lang"] = $lingua;
        }


        header('Content-Type: application/json');
        echo json_encode($json);
    }

    
    function notAllowed() 
    {
        http_response_code(404);
        echo "Risorsa non trovata";
    }