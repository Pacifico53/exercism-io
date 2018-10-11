class Pangram
    def self.pangram?(str)
        alpha = ('a'..'z').to_a - str.downcase.chars.to_a
        alpha.empty?
    end
end
