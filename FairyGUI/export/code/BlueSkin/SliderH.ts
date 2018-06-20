/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class SliderH extends fairygui.GSlider {

		public n1:fairygui.GImage;
		public bar:fairygui.GImage;
		public grip:Button_icon;

		public static URL:string = "ui://stv9j6m6raoc1e";

		public static createInstance():SliderH {
			return <SliderH><any>(fairygui.UIPackage.createObject("BlueSkin","SliderH"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar = <fairygui.GImage><any>(this.getChild("bar"));
			this.grip = <Button_icon><any>(this.getChild("grip"));
		}
	}
}