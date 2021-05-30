<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Twitter Clone</title>
    </head>
    <body class="h-full">
        <div id="app">
        </div>

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
