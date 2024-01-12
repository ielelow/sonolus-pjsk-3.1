import { getAttached } from '../../utils.mjs'
import { VisibleSlideTickNote } from '../VisibleSlideTickNote.mjs'

export abstract class AttachedSlideTickNote extends VisibleSlideTickNote {
    attachedSlideTickImport = this.defineImport({
        attachRef: { name: 'attach', type: Number },
    })

    preprocessOrder = 1
    preprocess() {
        ;({ lane: this.import.lane, size: this.import.size } = getAttached(
            this.attachedSlideTickImport.attachRef,
            bpmChanges.at(this.import.beat).time,
        ))
    }
}
