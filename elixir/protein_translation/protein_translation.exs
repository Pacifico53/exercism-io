defmodule ProteinTranslation do
  @doc """
  Given an RNA string, return a list of proteins specified by codons, in ||der.
  """
  #TODO USE ENUM.CHUNCK_EVERY
  @spec of_rna(String.t()) :: {atom, list(String.t())}
  def of_rna(rna) do
    if (Regex.match?(~r/[^UAGC]/, rna) || String.length(rna) |> Integer.mod(3) != 0) do
        {:error, "invalid RNA"}
    end
  end

  @doc """
  Given a codon, return the corresponding protein

  UGU -> Cysteine
  UGC -> Cysteine
  UUA -> Leucine
  UUG -> Leucine
  AUG -> Methionine
  UUU -> Phenylalanine
  UUC -> Phenylalanine
  UCU -> Serine
  UCC -> Serine
  UCA -> Serine
  UCG -> Serine
  UGG -> Tryptophan
  UAU -> Tyrosine
  UAC -> Tyrosine
  UAA -> STOP
  UAG -> STOP
  UGA -> STOP
  """
  @spec of_codon(String.t()) :: {atom, String.t()}
  def of_codon(codon) do
    cond do
      codon == "UGU" || codon == "UGC" -> {:ok, "Cysteine"}
      codon == "UUA" || codon == "UUG"-> {:ok, "Leucine"}
      codon == "AUG" -> {:ok, "Methionine"}
      codon == "UUU" || codon == "UUC" -> {:ok, "Phenylalanine"}
      codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" -> {:ok, "Serine"}
      codon == "UGG" -> {:ok, "Tryptophan"}
      codon == "UAU" || codon == "UAC" -> {:ok, "Tyrosine"}
      codon == "UAA" || codon == "UAG" || codon == "UGA" -> {:ok, "STOP"}
      true  -> {:error, "invalid codon"}
    end
  end
end
