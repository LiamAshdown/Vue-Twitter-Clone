<?php

namespace App\Providers;

use App\Service\Base\ProxyServiceInterface;
use App\Service\ProxyService;
use Illuminate\Support\ServiceProvider;

class ProxyServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ProxyServiceInterface::class, ProxyService::class);
    }
}
