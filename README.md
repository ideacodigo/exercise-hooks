# Ejercicios b谩sicos

> [Nos permite usar el estado y otras caracter铆sticas de react si usar una clase.](https://es.reactjs.org/docs/hooks-intro.html)
> 

Ejercicios b谩sicos para la introducci贸n a Hooks.

`useState`, `useEffect`, `useRef`, `useLayoutEffect`, `useMemo`, `memo`, `useCallback`, `barrel exports`

# Despliegue

<aside>
馃挕 El api [The Breaking Bad API](https://breakingbadapi.com/) la cual se utiliz贸 para realizar algunos ejercicios presenta algunos inconvenientes, revisa o remplaza el api si persisten los problemas.

</aside>

# Hook de estado

[exercise-hooks/src/01-useState at main 路 ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/01-useState)

> Permite rastrear el estado de un componente de funci贸n
> 

# Hook de efecto

`useEffect`

[exercise-hooks/src/02-useEffect at main 路 ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/02-useEffect)

> Como lo menciona [es.reactjs.org](https://es.reactjs.org/docs/hooks-effect.html), el hook de estado te permite llevar a cabo efectos secundarios de componentes funcionales.
> 

# Hook de referencia

`useHook`

[exercise-hooks/src/04-useRef at main 路 ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/04-useRef)

> [es.reactjs.org](https://github.com/ideacodigo/exercise-hooks/tree/main/src/04-useRef) nos menciona, que en su esencia `useRef` es como una *鈥渃aja鈥?* que puede almacenar en una variable mutable en su propiedad `.current` .
> 

<aside>
馃挕 En el ejercicio lo utilizamos para acceder a los atributos de inputs de manera 谩gil

</aside>

# Exportaci贸n de barriles

Un par茅ntesis en los hooks, en el desarrollo de estos ejercicios utilizamos importaciones de barril, esto nos es de utilidad cuando tenemos varias importaciones, las agrupamos en un archivo `index.js` y luego llamamos a este archivo cuando necesitemos estas importaciones en ves de llamar puntualmente a todas las importaciones.

[Introducir El Concepto De Exportaci贸n De Barriles En React (morioh.com)](https://morioh.com/p/d3f0cabedc92)

> Un barril nos permite consolidar, o resumir, las exportaciones de m煤ltiples archivos o m贸dulos en un solo m贸dulo. Los barriles agilizan las importaciones, simplifican las exportaciones y nos ayudan a evitar mucho desorden en nuestra base de c贸digo.
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

# Hook efecto de dise帽o

`useLayoutEffect`

[exercise-hooks/src/05-useLayoutEffect at main 路 ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/05-useLayoutEffect)

> [es.reactjs.org](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect) nos menciona que su firma es id茅ntica a聽`useEffect`
, pero se dispara de forma s铆ncrona despu茅s de todas las mutaciones de DOM. Use esto para leer el dise帽o del DOM y volver a renderizar de forma sincr贸nica.
> 

Nos permite realizar el seguimiento de propiedades de un objeto, cuando estas cambien podemos actuar seg煤n nuestras necesidades de adaptabilidad u otras.

# Hook de memoria

`useMemo`

[exercise-hooks/src/06-memos at main 路 ideacodigo/exercise-hooks (github.com)](https://github.com/ideacodigo/exercise-hooks/tree/main/src/06-memos)

Este nos devuelve un valor memorizado, podemos utilizar este hook para evitar renderizaciones innecesarias. en [es.reactjs.org](https://es.reactjs.org/docs/hooks-reference.html#usememo) podemos observar algunas recomendaciones de uso.