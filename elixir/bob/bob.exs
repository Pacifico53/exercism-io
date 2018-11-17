defmodule Bob do
  @checkLetterRegex ~r([\p{L}]) #Regex that matches a string with one character (regular or cyrillic alphabet)
  def hey(input) do
    str = String.trim(input)
    cond do
      is_shouting(str) && is_question(str) -> "Calm down, I know what I'm doing!"
      is_nothing(str) -> "Fine. Be that way!"
      is_question(str) -> "Sure."
      is_shouting(str) -> "Whoa, chill out!"
      true -> "Whatever."
    end
  end

  def is_question(str) do
    String.last(str) == "?"
  end

  def is_nothing(str) do
    str == ""
  end

  def is_shouting(str) do
    str == String.upcase(str) && str =~ @checkLetterRegex #This checks if the string has at least one letter character
  end
end
