/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class KeyValueInput extends fairygui.GComponent {

		public n4:TextInput;
		public n5:fairygui.GTextField;

		public static URL:string = "ui://snq31xvrraoc3q";

		public static createInstance():KeyValueInput {
			return <KeyValueInput><any>(fairygui.UIPackage.createObject("UIDefaultSkin","KeyValueInput"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n4 = <TextInput><any>(this.getChild("n4"));
			this.n5 = <fairygui.GTextField><any>(this.getChild("n5"));
		}
	}
}