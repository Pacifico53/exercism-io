public class PangramChecker {

    public boolean isPangram(String input) {
    	boolean result = true;
    	String lowcase = input.toLowerCase();
    	String alphabet = "abcdefghijklmnopqrstuvwxyz";
    	for (int i=0; i < alphabet.length() && result; i++) {
    		result = (lowcase.indexOf(alphabet.charAt(i)) == -1) ? false : true;
    	}
    	return result;
    }

}
