import { Command } from './interfaces.ts'
import { Queue } from 'queue-typescript'

class SceneNode {
  private children: SceneNode[]
  private parent: SceneNode

  onCommand(command: Command, deltaTime: number) {
    // if (haveCommonCategories(command.categories, this._categories)) {
    //   command.action(this, deltaTime)
    // }
    // for (var i = 0; i < this._children.length; i++) {
    //   this._children[i].onCommand(command, deltaTime)
    // }
  }

  addNode(node: SceneNode) {
    this.children.push(node)
  }

  updateCurrent(deltaTime: number, commands: Queue<Command>) {

  }

  updateChildren(deltaTime: number, commands: Queue<Command>) {
    this.children.forEach((child) => {
      child.update(deltaTime, commands)
    })
  }

  update(deltaTime: number, commands: Queue<Command>) {
    this.updateCurrent(deltaTime, commands)
    this.updateChildren(deltaTime, commands)
  }
}

export default SceneNode
