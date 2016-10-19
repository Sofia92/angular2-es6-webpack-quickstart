import {Component} from '@angular/core';

@Component({
    selector: 'index',
    template: `
		<div class="col-sm-8 col-sm-offset-2 content">
		<div class="form-group">
		    <h1>{{title}}</h1>
        </div>
        <div class="form-group well-lg">
            <div class="input-group">
                <input type="text" class="form-control">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-default">Search !</button>
                </span>
            </div>
        </div>	    
		</div>
	`,
    styleUrls: ['./src/public/app.css']
})

export class IndexComponent {
    title = 'Welcome to liking'

}