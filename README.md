# React Simple Modal

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-examples">Usage</a></li>
    <li>
      <a href="#props">Props</a>
      <ul>
        <li><a href="#props-examples">Props Examples</a></li>
      </ul>
    </li>
  </ol>
</details>

## About the project

This Modal component was initially created to meet a specific need in a personal project. However, aware of the value of component reusability, I designed it with the intention of making it adaptable and easily integrated into other projects.

<img src="/image.png" />

### Built with

[![React 18](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite.js](https://img.shields.io/badge/Vite.js-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## Getting Started

### Prerequisites

You need a <b>package manager</b> and <b>React 17 or later</b>.

-   npm

    ```bash
    npm install npm@latest -g
    ```

-   pnpm
    ```bash
    npm install -g pnpm
    ```
    Please refer to this [documentation](https://pnpm.io/installation) for more information.

### Installation

npm

```bash
npm i @florian_/react-simple-modal
```

pnpm

```bash
pnpm add @florian_/react-simple-modal
```

## Usage / Examples

The Modal component simply needs a state to indicate whether the modal window should be displayed or not, and a function to manage its closure.

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

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => setIsOpen(!isOpen);

	return (
		<>
			<button onClick={handleModal}>open</button>

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

export default App;
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
