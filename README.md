---
permalink: index.html
layout: 'default'
---

# Jinya HTML

Jinya HTML is a tagged template string based super simple template engine, which probably doesn't even deserve the name template engine.

## Installation

Either copy the index.js file or use the `@jinyacms/jinya-html` package from NPM.

## Usage

Jinya HTML is ESM based, so you just need to include the `index.js` file. See a simple example below:

```javascript
import { html } from 'jinya-html';

document.addEventListener('DOMContentLoaded', () => {
	const username = 'Foobar';
	const result = html` <h1>${username}</h1>
		<ul>
			${['one', 'two', 'three'].map((item) => `<li>${item}</li>`)}
		</ul>
		<div>${() => 'Test'}</div>`;
	document.body.innerHTML = result;
});
```

# License

Jinya HTML is licensed under the MIT License.
