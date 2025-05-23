class Pixel{constructor(t,e,i,s,h,a,n){this.width=t.width,this.height=t.height,this.ctx=e,this.x=i,this.y=s,this.color=h,this.speed=this.getRandomValue(.1,.9)*a,this.size=0,this.sizeStep=.4*Math.random(),this.minSize=.5,this.maxSizeInteger=2,this.maxSize=this.getRandomValue(this.minSize,this.maxSizeInteger),this.delay=n,this.counter=0,this.counterStep=4*Math.random()+(this.width+this.height)*.01,this.isIdle=!1,this.isReverse=!1,this.isShimmer=!1}getRandomValue(t,e){return Math.random()*(e-t)+t}draw(){let t=.5*this.maxSizeInteger-.5*this.size;this.ctx.fillStyle=this.color,this.ctx.fillRect(this.x+t,this.y+t,this.size,this.size)}appear(){if(this.isIdle=!1,this.counter<=this.delay){this.counter+=this.counterStep;return}this.size>=this.maxSize&&(this.isShimmer=!0),this.isShimmer?this.shimmer():this.size+=this.sizeStep,this.draw()}disappear(){if(this.isShimmer=!1,this.counter=0,this.size<=0){this.isIdle=!0;return}this.size-=.1,this.draw()}shimmer(){this.size>=this.maxSize?this.isReverse=!0:this.size<=this.minSize&&(this.isReverse=!1),this.isReverse?this.size-=this.speed:this.size+=this.speed}}class PixelCanvas extends HTMLElement{static register(t="pixel-canvas"){"customElements"in window&&customElements.define(t,this)}static css=`
      :host {
        display: grid;
        inline-size: 100%;
        block-size: 100%;
        overflow: hidden;
      }
    `;get colors(){return this.dataset.colors?.split(",")||["#f8fafc","#f1f5f9","#cbd5e1"]}get gap(){let t=this.dataset.gap||5;return t<=4?4:t>=50?50:parseInt(t)}get speed(){let t=this.dataset.speed||35;return t<=0||this.reducedMotion?0:t>=100?.1:.001*parseInt(t)}get noFocus(){return this.hasAttribute("data-no-focus")}get isMobileDevice(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}connectedCallback(){let t=document.createElement("canvas"),e=new CSSStyleSheet;this._parent=this.parentNode,this.shadowroot=this.attachShadow({mode:"open"}),e.replaceSync(PixelCanvas.css),this.shadowroot.adoptedStyleSheets=[e],this.shadowroot.append(t),this.canvas=this.shadowroot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.timeInterval=1e3/60,this.timePrevious=performance.now(),this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.init(),this.resizeObserver=new ResizeObserver(()=>this.init()),this.resizeObserver.observe(this),
      
      // Add event listeners based on device type
      this.isMobileDevice ? this.setupIntersectionObserver() : this.setupMouseEvents()
    }

    setupMouseEvents() {
      this._parent.addEventListener("mouseenter", this);
      this._parent.addEventListener("mouseleave", this);
      if (!this.noFocus) {
        this._parent.addEventListener("focusin", this);
        this._parent.addEventListener("focusout", this);
      }
    }

    setupIntersectionObserver() {
      // Create an Intersection Observer to detect when the element enters the viewport
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.handleAnimation("appear");
            // Set data attribute on the parent to indicate active state
            this.closest('.card')?.setAttribute('data-active', 'true');
          } else {
            this.handleAnimation("disappear");
            // Remove data attribute when scrolling away
            this.closest('.card')?.removeAttribute('data-active');
          }
        });
      }, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
      });
      
      // Start observing the canvas element
      this.observer.observe(this);
    }

    disconnectedCallback(){
      this.resizeObserver.disconnect();
      
      // Clean up event listeners and observers based on device type
      if (this.isMobileDevice) {
        if (this.observer) {
          this.observer.disconnect();
        }
      } else {
        this._parent.removeEventListener("mouseenter", this);
        this._parent.removeEventListener("mouseleave", this);
        if (!this.noFocus) {
          this._parent.removeEventListener("focusin", this);
          this._parent.removeEventListener("focusout", this);
        }
      }
      delete this._parent;
    }

    handleEvent(t){
      const eventType = t.type;
      if (eventType === "mouseenter" || eventType === "focusin") {
        // Set data attribute on hover
        this.closest('.card')?.setAttribute('data-active', 'true');
        this.handleAnimation("appear");
      } else if (eventType === "mouseleave" || eventType === "focusout") {
        // Remove data attribute when hover ends
        this.closest('.card')?.removeAttribute('data-active');
        this.handleAnimation("disappear");
      }
    }

    handleAnimation(t){cancelAnimationFrame(this.animation),this.animation=this.animate(t)}init(){let t=this.getBoundingClientRect(),e=Math.floor(t.width),i=Math.floor(t.height);this.pixels=[],this.canvas.width=e,this.canvas.height=i,this.canvas.style.width=`${e}px`,this.canvas.style.height=`${i}px`,this.createPixels()}getDistanceToCanvasCenter(t,e){let i=t-this.canvas.width/2,s=e-this.canvas.height/2;return Math.sqrt(i*i+s*s)}createPixels(){for(let t=0;t<this.canvas.width;t+=this.gap)for(let e=0;e<this.canvas.height;e+=this.gap){let i=this.colors[Math.floor(Math.random()*this.colors.length)],s=this.reducedMotion?0:this.getDistanceToCanvasCenter(t,e);this.pixels.push(new Pixel(this.canvas,this.ctx,t,e,i,this.speed,s))}}animate(t){this.animation=requestAnimationFrame(()=>this.animate(t));let e=performance.now(),i=e-this.timePrevious;if(!(i<this.timeInterval)){this.timePrevious=e-i%this.timeInterval,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let s=0;s<this.pixels.length;s++)this.pixels[s][t]();this.pixels.every(t=>t.isIdle)&&cancelAnimationFrame(this.animation)}}}PixelCanvas.register();