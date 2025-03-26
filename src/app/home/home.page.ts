
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todoList = [];
  public searchTerm ='';
  public items: any;



  today: number = Date.now();

  constructor(public modalCtrl: ModalController, public todoService: TodoService,   private dataService: DataService,) {
    this.getAllTask();


   }

 async addTask(){
  const modal= await this.modalCtrl.create({
    component: AddNewTaskPage
  });

  modal.onDidDismiss().then(newTaskObj =>{
    this.getAllTask();
  });

  return await modal.present();
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks();
    console.log(this.todoService.getAllTasks());
  }

  delete(key){
   // console.log(key);
    this.todoService.deleteTask(key);
    this.getAllTask();
   // this.todoList.splice(index,1);
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage,
      componentProps: {task:selectedTask}
    });

    modal.onDidDismiss().then(()=>{
      this.getAllTask();
    // eslint-disable-next-line @typescript-eslint/semi
    })

    return await modal.present();
  }

  //setFilteredItems()
 // {
 //   this.todoService= this.dataService.filterItems(this.searchTerm);
 // }

  ngOnInit() {
  //  this.setFilteredItems();
  }
}
