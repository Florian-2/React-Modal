# React Simple Modal

-   [Installation](#installation)
-   [Usage/Examples](#usageexamples)
-   [Props](#props)
    -   [Examples](#props-examples)

## Installation

npm

```bash
npm i @florian_/react-simple-modal
```

pnpm

```bash
pnpm add @florian_/react-simple-modal
```

## Usage/Examples

```js
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalDescription,
	ModalClose,
	ModalFooter,
} from "@florian_/react-simple-modal";

export function Example() {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => setIsOpen(!isOpen);

	return (
		<>
			<Button onClick={handleModal}>open</Button>

			<Modal open={isOpen} onClose={handleModal}>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Login</ModalTitle>
						<ModalDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</ModalDescription>
					</ModalHeader>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quaerat explicabo dolor repellendus sed esse
						voluptatum velit. Voluptate at veniam corrupti nihil a
						aliquam omnis magnam, vitae aut expedita, earum illo!
					</p>

					<ModalFooter>
						<ModalClose>Close</ModalClose>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
```

## Props

| Name         | Required | Default   | Type                              | Example                |
| ------------ | -------- | --------- | --------------------------------- | ---------------------- |
| open         | yes      | -         | boolean                           | [Click](#open)         |
| onClose      | yes      | -         | function => void                  | [Click](#onclose)      |
| onOpenChange | no       | undefined | function(isOpen: boolean) => void | [Click](#onopenChange) |
| onCreate     | no       | undefined | function => void                  | [Click](#oncreate)     |
| autoFocus    | no       | true      | boolean                           | [Click](#autofocus)    |
| restoreFocus | no       | true      | boolean                           | [Click](#restorefocus) |
| className    | no       | undefined | string                            |                        |

## Props Examples

### open

`open` the controlled open state of the dialog.

```js
<Modal open={true}>...</Modal>
```

### autoFocus

`autoFocus` focus the first focusable element in the modal.

```js
<Modal open autoFocus>
	...
</Modal>
```

### restoreFocus

`restoreFocus` restores focus on base element after closing modal.

```js
<Modal open restoreFocus>
	...
</Modal>
```

### onOpenChange

`onOpenChange` trigger when the open state of the dialog changes.

```js
<Modal onOpenChange={(isOpen) => console.log(isOpen))}>...</Modal>
```

### onClose

`onClose` triggers when the modal window closes.

```js
<Modal onClose={() => console.log("onClose")}>...</Modal>
```

### onCreate

`onCreate` trigger when component is create.

```js
<Modal onCreate={() => console.log("onCreate")}>...</Modal>
```
