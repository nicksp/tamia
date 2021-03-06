# Form

Basic form controls: inputs, textareas, buttons, form layouts and helpers.


## Markup

Controls:

```html
<input type="text" class="field" name="name">
<textarea type="text" class="field field_area" name="message"></textarea>
<input type="submit" class="button" value="Send!">
```

Block controls:

```html
<input type="text" class="field field_block" name="name">
<input type="submit" class="button button_block" value="Send!">
```

Field with unit:

```html
<div class="field-with-unit field-with-unit_left">
	<input id="summ" type="text" pattern="\d*" class="field field-with-unit__field">
	<label for="summ" class="field-with-unit__unit">€</label>
</div>
```

Layout:

```html
<form class="form form_block">
	<div class="form__group">
		<div class="form__row">
			<label for="field1" class="form__label">Name</label>
			<div class="form__widget"><input id="field1" type="text" class="field"></div>
		</div>
		<div class="form__row">
			<label for="field2" class="form__label">Email</label>
			<div class="form__widget"><input id="field2" type="email" class="field"></div>
		</div>
	</div>
	<div class="form__row">
		<input type="submit" class="button js-button-1" value="Boom!">
	</div>
</form>
```

Messages:

```html
<div class="alert">Thank you!</div>
<div class="alert alert_warning">Are you sure?</div>
<div class="alert alert_error">Out of cheese</div>
```

## States

### .field.is-disabled / .button.is-disabled / .disablable.is-disabled

Disabled state of a control. Should be combined with `disabled` attribute where appropriate.

### .form.is-success / .form.is-error

Shows/hides success/error messages:

```html
<form class="form is-success">
	<div class="form__success alert">Thank you!</div>
	<div class="form__error alert alert_error">Go away!</div>
</form>
```

## HTML attributes

### data-autolock

Disable submit button on form submit:

```html
<form class="form" data-autolock>
```

## Skin

Set `form_default_skin` or `modules_default_skin` to `true` to enable default skin.


## Configuration

### form_focus_color

Type: CSS color value.

Color of focus outline.
