import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = [];
  categorySelectedCategory;

  newTaskObj = {};
  itemName;
  itemDate;
  itemPriority;
  itemCategory;


  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.categories.push('personal');
    this.categories.push('health');
    this.categories.push('work');
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.newTaskObj);
  }

  selectedCategory(index){
    this.itemCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  async AddTask(){
    this.newTaskObj = ({itemName:this.itemName,
                        itemDueDate:this.itemDate,
                        itemPriority:this.itemPriority,
                        itemCategory:this.itemCategory});
    console.log(this.newTaskObj);

    // eslint-disable-next-line prefer-const
    let uid =  this.itemName + this.itemDate;

    if(uid){
    await this.todoService.addTask(uid,this.newTaskObj);
   }else{
     console.log('You cant save empty habit');
   }

  this.dismis();
  }


}
