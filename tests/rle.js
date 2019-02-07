'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('AAAAAAAABCCCC'), 'A8BC4');
		assert.strictEqual(rle('YYYYYYYYYTRR'), 'Y9TR2');
		assert.strictEqual(rle('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'), 'W12BW12B3W24BW14')
		assert.strictEqual(rle('Xtmprsqzntwlfb'), 'Xtmprsqzntwlfb');
		assert.strictEqual(rle('AAAAAAbbbXXXXXt'), 'A6b3X5t');
		assert.strictEqual(rle('112233'), '122232');
	});
});
