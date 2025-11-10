import { View } from "./View"
import { UserProps, User } from "../models/User"

export class UserForm extends View<User, UserProps> {
   
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.change-name': this.onSetNameClick,
            'click:.save-model': this.onSaveUser
        }
    }


    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onSaveUser = (): void {
        this.model.save()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector("input");
        if (input) {
            const name = input.value;
            this.model.set({name})
        }
    }

    template(): string {
        return `
        <div> 
            <input placeholder="${this.model.get("name")}" />
            <button class="change-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
        `
    }

  
}