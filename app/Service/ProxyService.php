<?php
namespace App\Service;

use App\Service\Base\ProxyServiceInterface;
use GuzzleHttp\Client;

class ProxyService implements ProxyServiceInterface
{
    /**
     * Proxy
     *
     * @param string $grantType Grant Type
     * @param array  $data      Data
     * @return mixed
     */
    public function proxy(string $grantType, array $data = array())
    {
        $http = new Client();

        $guzzleResponse = $http->post(config('app.url').'/oauth/token', [
            'http_errors' => false,
            'form_params' => array_merge($data, [
                'client_id'     => env('CONSUME_OWN_CLIENT_ID'),
                'client_secret' => env('CONSUME_OWN_CLIENT_SECRET'),
                'grant_type'    => $grantType
            ])
        ]);
        
        $response = response()->json(json_decode($guzzleResponse->getBody()));
        $response->setStatusCode($guzzleResponse->getStatusCode());

        $headers = $guzzleResponse->getHeaders();
        foreach($headers as $headerType => $headerValue) {
            $response->header($headerType, $headerValue);
        } 

        return $response;
    }
}

?>