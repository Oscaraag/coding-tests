# Instrucciones

En ./src encontraras el entrypoint para que inicies la prueba, ya hay tests configurados, solo debes ejecutar

```bash
npm run test

yarn test

```

## Contador de Cambio en Node.js

Escribe una función que cuente cuántas formas diferentes existen para dar cambio para una cantidad de dinero, dada una matriz de denominaciones de monedas. Por ejemplo, hay 3 formas de dar cambio para 4 si tienes monedas con denominaciones de 1 y 2:

```
1+1+1+1, 1+1+2, 2+2.
```

El orden de las monedas no importa:

```
1+1+2 == 2+1+1
```

Además, asume que tienes una cantidad infinita de monedas.

Tu función debe tomar una cantidad de dinero a cambiar y una matriz de denominaciones únicas para las monedas:

```javascript
countChange(4, [1, 2]) // => 3
countChange(10, [5, 2, 3]) // => 4
countChange(11, [5, 7]) // => 0
```

En este ejemplo, la función `countChange` toma un argumento de la cantidad de dinero a cambiar y una matriz de denominaciones únicas para las monedas. Retorna la cantidad de formas diferentes que existen para dar cambio.
