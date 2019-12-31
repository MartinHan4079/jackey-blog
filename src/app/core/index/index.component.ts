import { Component, OnInit } from '@angular/core';

import { JapeCoreService, ArticleList } from '../jape-core.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {

  articleList: Array<ArticleList>;

  monthList: string[];

  constructor(
    private japeCore: JapeCoreService
  ) { }

  ngOnInit() {
    this.getContents();
  }

  onEnter(value: string) {
    this.articleList = this.japeCore.searchPost(value);
    this.monthList = this.japeCore.getMonth(this.articleList);
  }

  getContents() {
    this.japeCore.getContents().subscribe(list => {
      list.forEach(element => {
        const [title, slug, time, lock, _] = element.name.split('.')[0].split('-');
        console.log(title, slug, time, lock, _);
        element.title = title;
        element.slug = slug;
        element.time = time;
        element.readTime = Math.floor(element.size / 360);
        element.lock = lock ? true : false;
      });
      // this.articleList = list.filter(ele => ele.lock === false).sort(compare('time'));
      this.articleList = list.sort(compare('time'));
    });
  }
}



function compare(property) {
  return (a, b) => {
      const value1 = a[property];
      const value2 = b[property];
      return value1 - value2;
  };
}
