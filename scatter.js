var custom = Chart.controllers.bubble.extend({
    draw: function(ease) {
        // Call super method first
        Chart.controllers.bubble.prototype.draw.call(this, ease);

        // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset
        var meta = this.getMeta();
        var pt0 = meta.data[0];
        var ptL = meta.data[meta.data.length-1];
        var radius = pt0._view.radius;

        // var ctx = this.chart.chart.ctx;
        // ctx.save();
        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 1;
        // ctx.strokeRect(pt0._view.x - radius, pt0._view.y - radius, 2 * radius, 2 * radius);
        // ctx.restore();
       var center = ((ptL._view.x - pt0._view.x) / 2)+pt0._view.x ;

        this.chart.chart.ctx.textAlign = "center";
        this.chart.chart.ctx.font = "15px Arial";
        this.chart.chart.ctx.fillText(meta.data.length + '%', center, 12);

        text = 'commits coming from'


        this.chart.chart.ctx.textAlign = "center";
        this.chart.chart.ctx.font = "11px Arial";
        this.chart.chart.ctx.fillText(text, center, 25);

        text = ' Independent contributors';
        this.chart.chart.ctx.textAlign = "center";
        this.chart.chart.ctx.font = "11px Arial";
        this.chart.chart.ctx.fillText(text, center, 35);
                     
    }
});

// Stores the controller so that the chart initialization routine can look it up with
// Chart.controllers[type]
Chart.controllers.iBubble = custom;