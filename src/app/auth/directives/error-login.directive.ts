import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorLoginDirective {

  private _mensaje : string = 'Input incorrecto'
  htmlElement : ElementRef<HTMLElement>
  @Input() set mensaje (valor : string){
    this._mensaje = valor
    this.setMensaje();
  }
  @Input() set valido (valor : boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden')
    }  else{
      this.htmlElement.nativeElement.classList.remove('hidden')    
    }  
  } 
  constructor(
    private el : ElementRef<HTMLElement>

  ) {
    this.htmlElement =  this.el
   }
  ngOnInit(): void {
    this.setMensaje()
  }
  
  setMensaje() : void{
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

}
