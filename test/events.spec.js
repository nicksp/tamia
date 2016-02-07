import sinon from 'sinon';
import * as events from '../src/events';

function click(elem) {
	let event = document.createEvent('HTMLEvents');
	event.initEvent('click', true, false);
	elem.dispatchEvent(event);
}

describe('events', () => {
	it('on() should attach an event handler to an element', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.on(elem, 'click', handler);
		click(elem);

		expect(handler.called).to.be.true;
	});

	it('on() should attach an event handler with delegation', () => {
		let elem = document.createElement('div');
		let span = document.createElement('span');
		elem.appendChild(span);
		let handler = sinon.spy();

		events.on(elem, 'click', 'span', handler);
		click(span);

		expect(handler.called).to.be.true;
	});

	it('off() should remove an event handler from an element', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.on(elem, 'click', handler);
		click(elem);
		expect(handler.calledOnce).to.be.true;

		events.off(elem, 'click', handler);
		click(elem);
		expect(handler.calledOnce).to.be.true;
	});

	it('one() should attach an event handler and remove it after the first event', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.one(elem, 'click', handler);

		click(elem);
		expect(handler.calledOnce).to.be.true;

		click(elem);
		expect(handler.calledOnce).to.be.true;
	});

	it('off() should remove an event handler that was set with one() function', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.one(elem, 'click', handler);
		events.off(elem, 'click', handler);
		click(elem);

		expect(handler.called).to.be.false;
	});

	it('off() should remove an event handler with delegation', () => {
		let elem = document.createElement('div');
		let span = document.createElement('span');
		elem.appendChild(span);
		let handler = sinon.spy();

		events.on(elem, 'click', 'span', handler);
		events.off(elem, 'click', handler);
		click(span);

		expect(handler.called).to.be.false;
	});

	it('trigger() should trigger a custom event', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.on(elem, 'tamia.foo', handler);
		events.trigger(elem, 'tamia.foo');

		expect(handler.called).to.be.true;
	});

	it('trigger() should pass details as additional arguments to a handler', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.on(elem, 'tamia.foo', handler);
		events.trigger(elem, 'tamia.foo', 1, '2');

		expect(handler.called).to.be.true;
		expect(handler.firstCall.args[1]).to.eql(1);
		expect(handler.firstCall.args[2]).to.eql('2');
	});

	it('triggerNative() should trigger a native event', () => {
		let elem = document.createElement('div');
		let handler = sinon.spy();

		events.on(elem, 'click', handler);
		events.triggerNative(elem, 'click');

		expect(handler.called).to.be.true;
	});

	it('registerGlobalEvents() should attach event handlers to document', () => {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let handler = sinon.spy();

		events.registerGlobalEvents({
			'tamia.foo': handler,
		});
		events.trigger(elem, 'tamia.foo');

		expect(handler.called).to.be.true;
	});
});
