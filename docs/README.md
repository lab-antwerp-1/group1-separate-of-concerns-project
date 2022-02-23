<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- public
- src
  - components
    - [render.js](#clientsrccomponentsrenderjs)
  - handlers
    - [handlerAdd.js](#clientsrchandlershandlerAddjs)
    - [handlerLoad.js](#clientsrchandlershandlerLoadjs)
    - [handlerRemove.js](#clientsrchandlershandlerRemovejs)
  - init
    - [index.js](#clientsrcinitindexjs)
  - listeners
    - [listenerAdd.js](#clientsrclistenerslistenerAddjs)
    - [listenerLoad.js](#clientsrclistenerslistenerLoadjs)
    - [listenerRemove.js](#clientsrclistenerslistenerRemovejs)
  - logic
    - [isBookNotInTheList.js](#clientsrclogicisBookNotInTheListjs)
    - [validityCheck.js](#clientsrclogicvalidityCheckjs)
  - [data.js](#clientsrcdatajs)
- styles

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /public

---

# /src

## /components

<details><summary><a href="../../client/src/components/render.js" id="clientsrccomponentsrenderjs">../client/src/components/render.js</a></summary>

</details>

---

## /handlers

<details><summary><a href="../../client/src/handlers/handlerAdd.js" id="clientsrchandlershandlerAddjs">../client/src/handlers/handlerAdd.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/handlerLoad.js" id="clientsrchandlershandlerLoadjs">../client/src/handlers/handlerLoad.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/handlerRemove.js" id="clientsrchandlershandlerRemovejs">../client/src/handlers/handlerRemove.js</a></summary>

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

---

## /listeners

<details><summary><a href="../../client/src/listeners/listenerAdd.js" id="clientsrclistenerslistenerAddjs">../client/src/listeners/listenerAdd.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/listenerLoad.js" id="clientsrclistenerslistenerLoadjs">../client/src/listeners/listenerLoad.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/listenerRemove.js" id="clientsrclistenerslistenerRemovejs">../client/src/listeners/listenerRemove.js</a></summary>

</details>

---

## /logic

<details><summary><a href="../../client/src/logic/isBookNotInTheList.js" id="clientsrclogicisBookNotInTheListjs">../client/src/logic/isBookNotInTheList.js</a></summary>

<a name="isBookNotInTheList"></a>

## isBookNotInTheList ⇒ <code>boolean</code>

Creates a boolean value after checking whether given book name is not in the array.
If the book title is not in the array, it returns true. Otherwise, false.

**Returns**: <code>boolean</code> - - Returns a boolean value of true/false.

| Param         | Type               | Description                      |
| ------------- | ------------------ | -------------------------------- |
| arrayBookList | <code>Array</code> | The array of objects to inspect. |
| toRemove      | <code>any</code>   | The value to check.              |

</details>

<details><summary><a href="../../client/src/logic/validityCheck.js" id="clientsrclogicvalidityCheckjs">../client/src/logic/validityCheck.js</a></summary>

<a name="validityCheck"></a>

## validityCheck ⇒ <code>boolean</code>

Check whether given parameter have at least 2 characters after space characters are removed
If parameter length is less than 2, it return true. Otherwise, false.

**Returns**: <code>boolean</code> - - Returns a boolean value of true/false.

| Param     | Type                | Description              |
| --------- | ------------------- | ------------------------ |
| userInput | <code>string</code> | The user input to check. |

</details>

---

<details><summary><a href="../../client/src/data.js" id="clientsrcdatajs">../client/src/data.js</a></summary>

</details>

---

# /styles

---

<!-- END DOCS -->
