Chart.elements.funnel = Chart.elements.Arc.extend({
    draw: function() {
       
        // call the defult draw 
        Chart.elements.Arc.prototype.draw.apply(this);

        // draw the label inside the chart
        var ctx = this._chart.ctx;
        var lineElementOptions = this._chart.options.elements.arc;
             if (lineElementOptions.total.display  ) {
            var vm = this._view;
            var value = lineElementOptions.total.value || 0
            var text = lineElementOptions.total.text || ''
            var label_point_x = vm.x;
            var label_point_y = vm.y;
                

            // Draw Step Label
            this._chart.ctx.font = 25 + "pt " + this._chart.options.defaultFontFamily;
            this._chart.ctx.fillStyle =  lineElementOptions.total.color || 'black';
            this._chart.ctx.textAlign = "center";
           
             this._chart.ctx.fillText(value, label_point_x  ,  label_point_y- 25);
             
             this._chart.ctx.font = lineElementOptions.total.fontSize+ "px " + this._chart.options.defaultFontFamily;
             this._chart.ctx.fillStyle =   'black';
             this._chart.textAlign = "center";
             this._chart.ctx.fillText(text, label_point_x ,  label_point_y+ 10);
           
        }
		ctx.restore();
	}
});


Chart.defaults.funnel = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.defaults.funnel['elements'] = {};
Chart.defaults.funnel['elements']['arc'] = {};
Chart.defaults.funnel['elements']['arc']['total'] = {
    display: true,
    fontSize: 15,
    color: 'red'
}

Chart.controllers.funnel = Chart.controllers.doughnut.extend({
    dataElementType: Chart.elements.funnel
});