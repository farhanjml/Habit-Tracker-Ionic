import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
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

    this.itemName = this.task.value.itemName;
    this.itemDate = this.task.value.itemDate;
    this.itemPriority = this.task.value.itemPriority;
    this.categorySelectedCategory = this.task.value.categorySelectedCategory;
    // console.log(this.task);
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtrl.dismiss();
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName,
                        itemDueDate:this.itemDate,
                        itemPriority:this.itemPriority,
                        itemCategory:this.itemCategory});

      // eslint-disable-next-line prefer-const
      let uid = this.task.key;
      await this.todoService.updateTask(uid, this.newTaskObj);
      this.dismis();
  }
}
