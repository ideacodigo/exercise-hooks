# HOOKS

## Configuración del proyecto

### Despliegue

El api [The Breaking Bad API](https://breakingbadapi.com/) la cual se utilizó para realizar algunos ejercicios presenta algunos inconvenientes, revisa o remplaza el api si persisten los problemas.

### Exportación de barriles

Un paréntesis en los hooks, en el desarrollo de estos ejercicios utilizamos importaciones de barril, esto nos es de utilidad cuando tenemos varias importaciones, las agrupamos en un archivo `index.js` y luego llamamos a este archivo cuando necesitemos estas importaciones en ves de llamar puntualmente a todas las importaciones.

[Introducir El Concepto De Exportación De Barriles En React (morioh.com)](https://morioh.com/p/d3f0cabedc92)

> Un barril nos permite consolidar, o resumir, las exportaciones de múltiples archivos o módulos en un solo módulo. Los barriles agilizan las importaciones, simplifican las exportaciones y nos ayudan a evitar mucho desorden en nuestra base de código.
> 

En resumen, se utiliza de la siguiente manera.

```jsx
export * from './lib'
export * from './theme';
```

```jsx
import React from 'react';
import { UseLib, ComponenteTheme} from './';
```

# Hoooks básicos

> [Nos permite usar el estado y otras características de react si usar una clase.](https://es.reactjs.org/docs/hooks-intro.html)
> 

Ejercicios básicos para la introducción a Hooks.

`useState`, `useEffect`, `useRef`, `useLayoutEffect`, `useMemo`, `memo`, `useCallback`, `barrel exports`, `useReducer`

### Hook de estado

[exercise-hooks/src/01-useState at main · ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/01-useState)

> Permite rastrear el estado de un componente de función
> 

### Hook de efecto

`useEffect`

[exercise-hooks/src/02-useEffect at main · ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/02-useEffect)

> Como lo menciona [es.reactjs.org](https://es.reactjs.org/docs/hooks-effect.html), el hook de estado te permite llevar a cabo efectos secundarios de componentes funcionales.
> 

### Hook de referencia

`useHook`

[exercise-hooks/src/04-useRef at main · ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/04-useRef)

> [es.reactjs.org](https://github.com/ideacodigo/exercise-hooks/tree/main/src/04-useRef) nos menciona, que en su esencia `useRef` es como una *“caja”* que puede almacenar en una variable mutable en su propiedad `.current` .
> 

<aside>
💡 En el ejercicio lo utilizamos para acceder a los atributos de inputs de manera ágil

</aside>

### Hook efecto de diseño

`useLayoutEffect`

[exercise-hooks/src/05-useLayoutEffect at main · ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/05-useLayoutEffect)

> [es.reactjs.org](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect) nos menciona que su firma es idéntica a `useEffect`
, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica.
> 

Nos permite realizar el seguimiento de propiedades de un objeto, cuando estas cambien podemos actuar según nuestras necesidades de adaptabilidad u otras.

### Hook de memoria

`useMemo`

[exercise-hooks/src/06-memos at main · ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/06-memos)

Este nos devuelve un valor memorizado, podemos utilizar este hook para evitar renderizaciones innecesarias. en [es.reactjs.org](https://es.reactjs.org/docs/hooks-reference.html#usememo) podemos observar algunas recomendaciones de uso.

## Hooks adicionales

Los siguientes hooks son una adición a los hooks básicos, son utilizados para casos específicos que, por que es recomendable primero dominar los básicos primero.

### Hook de Reducción

`useReducer`

Lo podemos utilizar para gestionar el estado de grandes valores como un `CRUD.`

```jsx
const [state, dispath] = useReducer(reducer, initialArg, init);
```

[https://github.com/ideacodigo/exercise-hooks/tree/exercise/useReducer/src/08-useReducer](https://github.com/ideacodigo/exercise-hooks/tree/exercise/useReducer/src/08-useReducer)

Hook de alternativa para `useStete` , [es.reactjs.org](https://es.reactjs.org/docs/hooks-reference.html#usereducer) nos recomienda utilizarlo cuando la lógica es más complicada e involucra multiples subvalores o el estado del hook depende del estado anterior.