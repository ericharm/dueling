const SceneNode = () => {
  const sceneNode = {
    parent: null,
    children: [],
    onCommand: (command, deltaTime) => {
      // if (haveCommonCategories(command.categories, this._categories)) {
      //   command.action(this, deltaTime)
      // }
      // for (var i = 0; i < this._children.length; i++) {
      //   this._children[i].onCommand(command, deltaTime)
      // }
    },

    addNode: (node) => {
      node.parent = sceneNode
      sceneNode.children.push(node)
    },

    update: (deltaTime, commands) => {
      sceneNode.updateCurrent(deltaTime, commands)
      sceneNode.updateChildren(deltaTime, commands)
    },

    updateCurrent: (deltaTime, commands) => {
    },

    updateChildren: (deltaTime, commands) => {
      sceneNode.children.forEach((child) => {
        child.update(deltaTime, commands)
      })
    },

    draw: (canvas) => {
      sceneNode.drawCurrent(canvas)
      sceneNode.drawChildren(canvas)
    },

    drawCurrent: (canvas) => {
    },

    drawChildren: (canvas) => {
      sceneNode.children.forEach((child) => {
        child.draw(canvas)
      })
    }
  }

  return sceneNode
}

export default SceneNode
