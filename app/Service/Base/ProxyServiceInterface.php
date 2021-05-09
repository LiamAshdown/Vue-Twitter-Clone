<?php
namespace App\Service\Base;

interface ProxyServiceInterface
{
    /**
     * Proxy
     *
     * @param string $grantType Grant Type
     * @param array  $data      Data
     * @return mixed
     */
    public function proxy(string $grantType, array $data = array());
}
?>