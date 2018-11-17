defmodule SecretHandshake do
  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  #TODO make this in a less embaracing way
  require Bitwise
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    codes = [{0b1, "wink"}, {0b10, "double blink"}, {0b100, "close your eyes"}, {0b1000, "jump"}]
    l = Enum.reduce(codes, [], fn val, acc ->
      cond do
        Bitwise.band(code, elem(val, 0)) > 0 -> acc ++ [elem(val, 1)]
        true -> acc
      end
    end)
    if (code > 16) do
      Enum.reverse(l)
    else
      l
    end
  end
end
