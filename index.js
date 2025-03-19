<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Prueba</title>
</head>
<body>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <button id="testButton">Llamar a Endpoint</button>
    </div>

    <script>
        document.getElementById('testButton').addEventListener('click', function() {
            fetch('https://tu-endpoint.com/api')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert("Llamada exitosa al endpoint!");
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Hubo un error al llamar al endpoint.");
                });
        });
    </script>
</body>
</html>
