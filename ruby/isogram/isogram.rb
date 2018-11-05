class Isogram
    def self.isogram?(str)
        aux = ""
        str.downcase.each_char{ |c|
            unless "- ".include? c
                return false if aux.include? c
                aux += c
            end
        }
        true
    end
end
