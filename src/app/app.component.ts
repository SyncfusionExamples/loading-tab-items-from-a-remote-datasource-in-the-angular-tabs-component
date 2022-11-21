import { Component } from '@angular/core';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'angular-tabs';
  public employeeData : any = [];
  public mapping = {
    header : 'FirstName', content : 'Notes'
  };

  public ngOnInit() : void {
    new DataManager({
      url : 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Employees',
      adaptor : new ODataAdaptor
    }).executeQuery(new Query().range(1,4)).then((e : ReturnOption) => {
      let result : any = e.result;
      for(let i: number = 0; i < result.length; i++) {
        this.employeeData.push(
          { header: {text: result[i][this.mapping.header]}, 
            content: result[i][this.mapping.content] 
          }
        );
      }
    });
  }

  public countries : any[] = [
      {
        header: {text: "India"}, 
        content: 'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area.' 
      },
      { 
        header: {text: "Canada"}, 
        content: 'Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north.' 
      },
      { 
        header: {text: "London"}, 
        content: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.' 
      },
      { 
        header: {text: "Germany"}, 
        content: 'Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. ' 
      }
  ];

  public tabHeaderText : Object[] = [
    {text: 'HTML'},
    {text: 'ASP.NET'},
    {text: 'PHP'}
  ];
  public tabContent : string[] = [
    "HyperText Markup Language is the standard markup language used to create web pages.",
    "ASP.NET allows programmers to build dynamic web sites, web applications and web services.",
    "PHP is a server scripting language, and a tool for making dynamic and interactive Web pages."
  ];

  }
 