import { html } from '../index.js';

describe('Jinya HTML test suite', function () {
	it('Template with no placeholders', function () {
		const result = html` <div></div>`;

		expect(result).toBe('<div></div>');
	});
	it('Template with string placeholder', function () {
		const username = 'Test';
		const result = html` <div>${username}</div>`;

		expect(result).toBe('<div>Test</div>');
	});
	it('Template with function placeholder', function () {
		const result = html` <div>${() => 'Test'}</div>`;

		expect(result).toBe('<div>Test</div>');
	});
	it('Template with array placeholder', function () {
		const result = html` <ul>
			${['one', 'two', 'three'].map((item) => `<li>${item}</li>`)}
		</ul>`;

		expect(result).toBe('<ul><li>one</li><li>two</li><li>three</li></ul>');
	});
	it('Template with mixed placeholders', function () {
		const username = 'Test';
		const result = html` <h1>${username}</h1>
			<ul>
				${['one', 'two', 'three'].map((item) => `<li>${item}</li>`)}
			</ul>
			<div>${() => 'Test'}</div>`;

		expect(result).toBe(`<h1>Test</h1>
            <ul><li>one</li><li>two</li><li>three</li></ul>
            <div>Test</div>`);
	});
});
